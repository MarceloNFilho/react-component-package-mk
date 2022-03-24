/// <reference types="react" />
export interface CallApiProps {
    key: String;
    shelter_id: String;
}
export interface ObjectProps {
    props: CallApiProps;
}
export declare function ButtonComponent({ props }: ObjectProps): JSX.Element;
