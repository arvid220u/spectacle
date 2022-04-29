import { MarkdownComponentMap } from '../../utils/mdx-component-mapper';
import { ElementType, FC } from 'react';
declare type MdComponentProps = {
    [key: string]: any;
};
declare type CommonMarkdownProps = {
    animateListItems?: boolean;
    componentProps?: MdComponentProps;
    children: string;
};
declare type MapAndTemplate = {
    componentMap?: MarkdownComponentMap;
    template?: {
        default: ElementType;
        getPropsForAST?: Function;
    };
};
export declare const Markdown: import("react").ForwardRefExoticComponent<CommonMarkdownProps & MapAndTemplate & import("react").RefAttributes<HTMLDivElement>>;
declare type MarkdownSlideProps = CommonMarkdownProps & MapAndTemplate;
export declare const MarkdownSlide: ({ children, componentMap, template, animateListItems, componentProps, ...rest }: MarkdownSlideProps) => JSX.Element;
declare type MarkdownSlideSetProps = CommonMarkdownProps & {
    slideProps?: Partial<MarkdownSlideProps>[];
};
export declare const MarkdownSlideSet: ({ children: rawMarkdownText, slideProps, ...allSlideProps }: MarkdownSlideSetProps) => JSX.Element;
export declare const MarkdownPreHelper: (PreComponent: ElementType<any> | undefined, CodeInlineComponent: ElementType<any> | undefined, CodeBlockComponent: ElementType) => FC<{}>;
export {};
//# sourceMappingURL=markdown.d.ts.map