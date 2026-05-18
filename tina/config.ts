import { defineConfig } from "tinacms";

// Your hosting provider will flash an id here
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || process.env.BRANCH || "main";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
                name: "text",
                label: "Text Block",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "string", name: "alignment", label: "Alignment", options: ["left", "center", "right"] },
                ],
              },
              {
                name: "youtube",
                label: "YouTube Video",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "videoUrl", label: "YouTube URL" },
                ],
              },
              {
                name: "gallery",
                label: "Photo Gallery",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    list: true,
                    name: "images",
                    label: "Images",
                    fields: [
                      { type: "image", name: "src", label: "Image" },
                      { type: "string", name: "alt", label: "Alt Text" },
                    ],
                  },
                ],
              },
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
                name: "team_grid",
                label: "Team Grid",
                nameOverride: "team-grid",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                ],
              },
              {
                name: "google_form",
                label: "Google Form",
                nameOverride: "google-form",
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
