import { ReactNode } from 'react';
import { SpectacleThemeOverrides } from '../../theme/default-theme';
export default function PrintMode({ children, theme, exportMode, pageSize, pageOrientation, backgroundImage }: PrintModeProps): JSX.Element;
declare type PrintModeProps = {
    children: ReactNode;
    theme?: SpectacleThemeOverrides;
    exportMode?: boolean;
    pageSize?: string;
    pageOrientation?: '' | 'landscape' | 'portrait';
    backgroundImage?: string;
};
export {};
//# sourceMappingURL=index.d.ts.map