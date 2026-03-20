# GitHub Actions

GitHub Actions is an event-driven, do something platform. I refuse to call it a CI/CD platform because CI and CD are completely separate concepts from what GitHub Actions does.

## Sample GitHub Actions snippets

Note this is a collection of examples, not how a workflow should be structured.

```yaml

jobs:
// Pass value between steps in a job
  pass-vars-between-steps:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Date Now
        run: echo DATE_NOW=$(date +'%d/%m/%Y %H:%M:%S') >> $GITHUB_ENV
      - name: Print Date from earlier
        run: echo ${{ env.DATE_NOW }}

// Pass value between a step and another action in a job
      - name: Remove all non alpha-numeric characters from changelog
        run: |
          echo changelog=$(echo -n ${{ inputs.changelog }} | tr -cs '[:alnum:][:blank:]') >> $GITHUB_ENV
      - name: Convert changelog to Atlassian Document Format (adf)
        uses: madeupaction/markdown-to-adf@stable
        with:
          markdown: "${{ env.changelog }}"

// Pass a value between steps in different jobs 
  job-var-source:
    runs-on: ubuntu-latest
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "test=hello" >> "$GITHUB_OUTPUT"
      - id: step2
        run: echo "test=world" >> "$GITHUB_OUTPUT"
  job-var-consumer:
    runs-on: ubuntu-latest
    needs: job-var-source
    steps:
      - env:
          OUTPUT1: ${{needs.job1.outputs.output1}}
          OUTPUT2: ${{needs.job1.outputs.output2}}
        run: echo "$OUTPUT1 $OUTPUT2"

// Run simple python code in a step instead of bash
  job-python-example
    - name: Execute python inline
      shell: python
      run: |
        import os
        print('Doing a no-op with Python.')

```

## Creating JS or TS GHA Actions

See <https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action> for the docs about how to create custom actions for GitHub Actions (thanks for overloading that word GitHub!). Advantages of this include being able to use Jest or similar to execute tests against the code being written. There is a framework called [act](https://github.com/nektos/act), however it suffers from the same high-level issues as trying to run Jenkins locally in a corporate environment, which is the amount of setup required to reproduce a sufficiently representative environment. Do you have the same runner labels? Do you have access to the necessary secrets/auth tokens etc? 

### Example repos

* Javascript - <https://github.com/actions/javascript-action>
* TypeScript - <https://github.com/actions/typescript-action>

## References

* https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow
