import { Guide, Method, PrismaClient, Screen, Template } from '@prisma/client/edge';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// globalThis는 전역객체에 접근할 수 있는 식별자
export const db = globalThis.prisma || new PrismaClient();
// use `prisma` in your application to read and write data in your DB

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// export const db = new PrismaClient();
export type ScreenWithTemplate = Screen & {
  template: {
    id: string;
    appName: string | null;
    version: string | null;
    phoneName: string | null;
  } | null;
};
export type ScreenWithAllTemplate = Screen & {
  template: {
    id: string;
    appName: string | null;
    version: string | null;
    phoneName: string | null;
    main_color: string | null;
    sub_color: string | null;
  } | null;
};

export type TemplateWithScreenWithhoutGuideComId = Template & {
  screens:
    | {
        id: string;
        name: string | null;
        elements: string | null;
        bgColor: string | null;
      }[]
    | null;
};
export type TemplateWithScreensNameAndId = Template & {
  screens:
    | {
        id: string;
        name: string | null;
      }[]
    | null;
};

export type GuideWithGuideComponentWithScreenElements = Guide & {
  guide_component: {
    id: string;
    screen: {
      elements: string | null;
      id: string;
      name: string | null;
      template: {
        appName: string | null;
        version: string | null;
        phoneName: string | null;
      } | null;
    } | null;
    targetBox: string | null;
  } | null;
};

export type elementDataType = {
  type: string;
  content: string;
  style: elementStyleType;
  onClick?: { id: string; type: string; event: string };
  className: string;
  id: string;
};
export type elementStyleType = {
  fontSize: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
  opacity: string;
  border: string;
  borderRadius: string;
  shadow: string;
  width: string;
  height: string;
  padding: string;
  margin: string;
  zIndex: string;
  left: string;
  top: string;
};
export type targetDataType = {
  top: string;
  left: string;
  width: string;
  height: string;
  zIndex: string;
};

export type GuideWithGuideComponent =
  | (Guide & {
      guide_component: {
        id: string;
        code: string | null;
        created_at: Date;
        updated_at: Date;
        guideId: string | null;
      } | null;
    })
  | null;
export type MethodWithGuide =
  | (
      | (Method & {
          guides: {
            id: string;
            description: string;
            order: number | null;
            created_at: Date;
            updated_at: Date;
            methodId: string | null;
          }[];
        })
      | null
    )
  | null;
