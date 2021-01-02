import {reactive} from 'vue';
import themeVariables from '@/common/style/theme.scss';
const theme = reactive({customTheme:themeVariables.customTheme});
export function useTheme() {
    function setTheme(color: string){
        theme.customTheme = color;
    }
    return {
        theme,
        setTheme
    };
}