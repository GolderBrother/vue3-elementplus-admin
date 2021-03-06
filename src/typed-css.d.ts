declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "@/common/style/*.scss" {
  const content: any;
  export default content;
}

// declare module '*.scss' {
//   const content: any;
//   export default content;
// }
// declare module '*.less' {
//   const content: any;
//   export default content;
// }
