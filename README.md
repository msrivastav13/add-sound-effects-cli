add-sound-effects-cli
=====================

The CLI plugin adds sound effect on successfull deploy and failures

Install the plugin using below command

`sfdx plugins:install add-sound-effects-cli`

Add the path of the mp3 or other music file in the environment variables for playing sounds on deployment success and failures.

For MACOSX or Linux set environment variables for command line session

**For playing sounds on Success**

`export DEPLOY_SUCCESS_SOUND="/Users/mohith.shrivastava/Downloads/right-answer-ding-ding-sound-effect/Right-answer-ding-ding-sound-effect.mp3"`

**For playing sounds on Failure**

`export DEPLOY_FAILURE_SOUND="/Users/mohith.shrivastava/Downloads/Wrong-answer-sound-effect/Wrong-answer-sound-effect.mp3"`
