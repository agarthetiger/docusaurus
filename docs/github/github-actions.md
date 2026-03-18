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
        uses: domgen/ccoe-ci-cd-actions/.github/actions/markdown-to-adf@stable
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

// Run python code in a step instead of bash
  job-python-example
    - name: Execute python inline
      shell: python
      run: |
        import os
        print('Doing a no-op with Python.')

```

## References

* https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow
