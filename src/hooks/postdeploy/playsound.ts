import { Command, Hook } from '@oclif/config';
// tslint:disable-next-line: no-var-requires
const player = require('play-sound')({});

// tslint:disable-next-line:no-any
type HookFunction = (this: Hook.Context, options: HookOptions) => any;

type HookOptions = {
    Command: Command.Class;
    argv: string[];
    commandId: string;
    result?: PostDeployResult;
};

type PostDeployResult = {
    success: boolean;
    numberComponentErrors: number;
};

export const hook: HookFunction = async options => {
    // console.log('PostDepoy Hook Running');
    if (options?.result?.success) {
        playfile(process.env.DEPLOY_SUCCESS_SOUND);
    }
    if (options?.result?.numberComponentErrors) {
        if (options.result.numberComponentErrors > 0) {
            playfile(process.env.DEPLOY_FAILURE_SOUND);
        }
    }
};

const playfile = (file?: string) => {
    // tslint:disable-next-line: no-any
    player.play(file, (err: any) => {
        if (err) {
            throw err;
        }
    });
};

export default hook;
