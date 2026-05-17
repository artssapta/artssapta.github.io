import { defineConfig } from "tinacms";

// Your hosting provider will flash an id here
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "color", label: "Background Color", ui: { component: "color" } },
                ],
              },
              {
                name: "about",
                label: "About Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "imageSide", label: "Image Side", options: ["left", "right"] },
                ],
              },
              {
                name: "events",
                label: "Events Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "image", name: "flyerImage", label: "Flyer Image" },
                  { type: "string", name: "color", label: "Header Color", ui: { component: "color" } },
                ],
              },
              {
                name: "team-grid",
                label: "Team Grid",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                ],
              },
              {
                name: "google-form",
                label: "Google Form",
                fields: [
                  { type: "string", name: "url", label: "Form URL" },
                  { type: "string", name: "height", label: "Height" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "team",
        label: "Team Members",
        path: "src/content/team",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
          {
            type: "image",
            name: "photo",
            label: "Photo",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Bio",
            isBody: true,
          },
        ],
      },
    ],
  },
});
