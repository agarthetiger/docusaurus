# Pipeline Steps
## [sh](https://jenkins.io/doc/pipeline/steps/workflow-durable-task-step/#sh-shell-script) 
The bash defaults for running sh script is `set -xe` which will print all commands and arguments when executed (-x) and terminate on any non-zero exit code (-e). Note that this behaviour changes if using `returnStatus: true`. In this case the sh step will not terminate on error but the build will still be marked as failed overall, but the build execution will not be halted. It is down to you to check the value returned by the sh step.

### Quotes and sh
Quotes in Jenkinsfiles are not always as simple to get right as you may think. Jenkinsfiles are groovy DSL, which often reference environment variables such as the values for parameterised jobs. Environment variables and groovy vars may both need to be passed to an echo step or to a sh step, sometimes to be evaluated in the Jenkins context, sometimes by the sh. An apparently simple task using process substitution to create a virtual .netrc file or creating a temporary json file (without using [writeJSON](https://jenkins.io/doc/pipeline/steps/pipeline-utility-steps/#writejson-write-json-to-a-file-in-the-workspace)) is often not quite so straightforward unless you remember the rules for quotations for each context.

#### Env vars in Jenkinsfiles

```groovy
properties([
    parameters([
        string(name: 'MY_PARAM', defaultValue: '1.0.0', description: 'Useful description here.'),
    ])
])

node{
    echo MY_PARAM // Prints '1.0.0' assuming the param is left as the default value
    def mylist = ['MY_PARAM']
    mylist?.each {
        echo it // Prints 'MY_PARAM'
        // echo $it // Error, no such property $it 
        echo 'env.${it}' // Prints 'env.${it}', single quotes do no variable interpolation
        echo "env.${it}" // Prints 'env.MY_PARAM', variable interpolation on it but not for env
        echo "$env.MY_PARAM" // Prints '1.0.0'
        echo "$env.it" // Prints 'null'
        echo "$env.${it}" // Prints 'org.jenkinsci.plugins.workflow.cps.EnvActionImpl@4ba0a01e.MY_PARAM'
      
        // Solution
        def myvar = env[it]
        echo myvar // Prints '1.0.0'
    }

}
```

#### Quotes in Jenkinsfiles

```groovy
node{
    timestamps{
        stage('Samples'){
            
            // Single quotes with no interpolation, at least not in Jenkins. 
            // The dollar variable will be evaluated before being run by the 
            // shell command, so variables which Jenkins makes available as 
            // environment variables can still be accessed from within a 
            // single-quoted string, passed to the sh task.
            sh 'echo $PATH'
            
            // Triple single quotes doesn't change how the interpolation works, 
            // only allows spanning multiple lines to execute multiple commands.
            sh '''
                echo The build number is $BUILD_NUMBER
            '''
            
            // Double quotes are silently dropped. Note that $BUILD_NUMBER here 
            // is being evaluated by the shell. There is no interpolation by 
            // Groovy or Jenkins before this single-quoted string is being passed
            // to the sh task.
            sh 'echo Dropping double quotes in build "$BUILD_NUMBER"'
            
            // To preserve double quotes, they need to be escaped with double 
            // back slashes. Note that the line echo'd because of the default 
            // -x sh option is different from the string which is echo'd. See 
            // console output for this job.
            sh 'echo Preserving double quotes in build \\"$BUILD_NUMBER\\"'
            
            // As in any programming language, variables in code don't need a 
            // dollar prefix or braces. 
            echo env.BUILD_NUMBER
            
            // Groovy will interpolate anything beginning with a dollar sign in
            // a double-quoted string. In this case there was no need to include 
            // curly braces, these are only required if the variable name is 
            // otherwise ambiguous within the string.
            echo "$env.BUILD_NUMBER"
            
            // A single backslash is required to delimit the dollar if the
            // string should be printed exactly as is.
            echo "Exact print of text \$env.BUILD_NUMBER"
            
            // Jenkins will interpolate the variable in this string, so will 
            // pass "echo n" to the sh task, where n is the current build number.
            // Note that env is a variable made available in groovy by Jenkins.
            sh "echo Build number from double-quoted string is $env.BUILD_NUMBER"
            
            sh "echo Single quotes 'inside' double quotes need no dereferencing."
            
            sh "echo Double quotes need triple backslashes to preserve, like \\\"   "
            
            sh """
                echo Single quotes 'inside' double quotes from
                echo multi-line triple double quoted sh task.
            """
            
            // Example of outputting double quotes into a file, as a workaround
            // for not having JSON groovy methods whitelisted across Jenkins
            // Masters. This works with variables which sh can interpolate, ie. 
            // environment variables.
            sh '''
                echo "{\\"build_number\\":\\"$BUILD_NUMBER\\"}" > temp.json
                cat temp.json
            '''
            
            // There are two other options, either change the enclosing quotes 
            // to double quotes and adjust the inner quotes and delimiters.
            def local_build_number = env.BUILD_NUMBER
            sh """
                echo "{\\\"build_number\\\":\\\"$local_build_number\\\"}" > temp2.json
                cat temp2.json
            """
            
            // or wrap the wingle quoted example with withenv. 
            // Note that the snippet generator put single quotes around the 
            // variable which need to be double quotes here in order to 
            // interpolate BUILD_NUMBER.
            withEnv(["myvar=$BUILD_NUMBER"]) {
                sh '''
                    echo {\\"build_number\\":\\"$myvar\\"} > temp3.json
                    cat temp3.json
                '''
            }
        }
    }
}
```

### Debugging sh scripts
Add 'cat -n \$0' into sh scripts to get Jenkins to echo out the shell script and line numbers into the console log, to check what Jenkins is actually executing on the agent.
From [this blog](https://devblog.metabrite.com/posts/jenkins-04-sh-step/)

## [NonCPS annotation](https://github.com/jenkinsci/workflow-cps-plugin/blob/master/README.md#technical-design)
DSL code can only call methods or use classes which are serializable, unless the non-serializable methods are annotated with @NonCPS. Note there are additional considerations to be aware of. 

* Methods annotated with @NonCPS cannot call any DSL methods, or any other methods unless the other methods are also annotated as NonCPS.
* Methods annotated with @NonCPS which call other methods will have undefined behaviour, including but not limited to returning unexpected values.
* Echo appears to be safe to use to log information from @NonCPS methods. 

