export type EventInputTypeCustom = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type EventFormTypeCustom = React.FormEvent<HTMLFormElement>;

export interface Meetup {
    title: string,
    image: string,
    address: string,
    description: string,
};