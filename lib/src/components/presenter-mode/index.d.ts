import { ReactNode } from 'react';
import { SpectacleThemeOverrides } from '../../theme/default-theme';
declare const PresenterMode: (props: PresenterModeProps) => JSX.Element;
export default PresenterMode;
declare type PresenterModeProps = {
    theme?: SpectacleThemeOverrides;
    children: ReactNode;
    backgroundImage?: string;
};
//# sourceMappingURL=index.d.ts.map