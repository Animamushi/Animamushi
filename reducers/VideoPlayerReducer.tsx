export default function VideoPlayerReducer(state: any, action: any) {
    switch (action.type) {
        case 'PLAY_PAUSE':
            return { ...state, playing: !state.playing }
        case 'PLAY':
            return { ...state, playing: true }
        case 'PAUSE':
            return { ...state, playing: false }
        case 'VOLUME':
            return { ...state, volume: parseFloat(action.payload) }
        case 'DURATION':
            return { ...state, duration: action.payload }
        case 'SEEK':
            console.log('seeek', action.payload)
            return { ...state, seeking: action.payload }
        case 'SEEK_CHANGE':
            console.log('seeekChange', action.payload)
            return { ...state, played: action.payload }
        case 'SEEK_NEW':
            const { ref, value } = action.payload;
            ref.current.seekTo(parseFloat(value));
            return { ...state };
        case 'FORWARD_10':

            if (state.loadedSeconds > 0 && state.playing) {
                console.log('forward 10', state)
                console.log(`rest ${state.played}`, state.played - .100)
                let onPlay = state.played - parseFloat(".100");
                return { ...state, played: onPlay }
            }
            return { ...state };
        case 'ADVANCE_10':
            if (state.loadedSeconds > 0 && state.playing) {
                console.log('advance 10', state)
                console.log(`add ${state.played}`, state.played - .100)
                console.log(action, state)
                let onPlay = state.played + parseFloat(".100");
                return { ...state, played: onPlay }
            }
            return { ...state };
        case 'ON_PROGRESS':
            return !state.seeking ? { ...state, ...action.payload } : { ...state };
        default:
            return { ...state }
    }
}