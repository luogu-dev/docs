# Agent Guidelines for Luogu Docs

## Build and Development Commands

### Development
- `pnpm install` - Install dependencies
- `pnpm run start` - Start development server (localhost:3000)
- `pnpm run start -h 0.0.0.0` - Start with external access for GitHub Codespaces
- `pnpm run serve` - Serve built site locally
- `pnpm run clear` - Clear Docusaurus cache

### Build and Testing
- `pnpm run build` - Build production version
- `pnpm run typecheck` - Run TypeScript type checking

### Documentation
- `pnpm run write-translations` - Generate translation files
- `pnpm run write-heading-ids` - Generate heading IDs for MDX

## Project Structure

```
docs/
├── docs/
│   ├── manual/
│   │   ├── class/          # Luogu class and paid services docs
│   │   ├── luogu/          # Main site operation guide
│   │   │   ├── account/    # Account management
│   │   │   ├── problem/    # Problem-related guides
│   │   │   └── team/       # Team and group features
│   │   └── _image/         # Images for manual docs
│   ├── rules/
│   │   ├── community/      # Community rules
│   │   └── academic/       # Academic guidelines
│   │       ├── guide/      # Academic guides
│   │       ├── handbook/   # Academic handbook
│   │       └── lgr/        # Luogu official contests guidelines
│   │       └── _image/     # Images for rules docs
│   └── ula/                # User License Agreements
├── src/
│   ├── pages/              # Custom pages (about, contact, etc.)
│   └── style.css           # Custom theme styles
└── static/img/             # Static images

Docusaurus Configuration
├── docusaurus.config.ts    # Main configuration
├── sidebars.ts             # Sidebar structure
├── tsconfig.json           # TypeScript config
└── babel.config.js         # Babel configuration
```

## Code Style Guidelines

### Documentation Content (Markdown/MDX)

**Frontmatter Format:**
```markdown
---
sidebar_position: 1
---
```

- Use Chinese language for all content (zh-Hans)
- Use `sidebar_position` to control documentation order in sidebar
- Maintain consistent heading levels (use H1 for page titles, H2-H4 for sections)
- Use bullet points and numbered lists for clarity
- Include images in `docs/*/` or `docs/*/_image/` directories with descriptive filenames

**Content Structure:**
- Start with a brief introduction if applicable
- Use subheadings for main sections
- Provide clear step-by-step instructions for guides
- Include warnings, notes, and important information using standard markdown

### TypeScript Configuration

- Extends Docusaurus default TypeScript configuration
- Compiler options in `tsconfig.json`
- Use type checking before commits (`pnpm run typecheck`)

### Babel Configuration

- Use Docusaurus preset as default
- No additional plugins configured

## Naming Conventions

**Documentation:**
- Use descriptive filenames in lowercase with hyphens: `image-hosting.md`
- Use snake_case for image directories: `_image/`
- Page titles use H1 heading

**Image Files:**
- Use descriptive names with underscores: `TrainingList1.jpg`
- Include sequence numbers for multi-step guides

**Code Blocks:**
- Specify language for syntax highlighting: ````markdown, ````typescript, ````bash, etc.

## Writing Guidelines

### Tone and Style
- Use clear, concise, and professional Chinese language
- Be instructional and user-friendly
- Avoid unnecessary technical jargon or explain it when used
- Maintain consistency in terminology across documents

### Structure
1. **Introduction**: Brief overview of what the page covers
2. **Key Sections**: Organized with clear headings
3. **Examples**: Include screenshots where appropriate (in `_image` directories)
4. **Related Links**: Reference other relevant documentation
5. **Contact Info**: Provide contact/support information when needed

### Best Practices
- Keep content up-to-date with the actual website functionality
- Use the `release-note.md` page for major changes
- Include relative image paths: `![Description](_image/filename.jpg)`
- Update `sidebars.ts` when adding new documentation sections
- Test that links work correctly
- Use Docusaurus features like admonitions when appropriate

## Testing and Validation

Before committing changes:
1. Run `pnpm run typecheck` to verify TypeScript types
2. Run `pnpm run build` to ensure production build succeeds
3. Check for broken links in markdown files
4. Verify image paths are correct
5. Test documentation navigation in development mode
6. Ensure all internal links use relative paths starting with `/`

## Git Commit Guidelines

- Write commit messages in Chinese
- Be descriptive about what was changed
- Include relevant context in the message
- Examples:
  - "更新洛谷题单功能说明"
  - "添加学术规范新章节"
  - "修复图片路径错误"

## Additional Notes

- Project uses Docusaurus 3.6.1
- Package manager: pnpm (recommended)
- Node.js version: >=20.17
- Math/TeX support via remarkMath and rehypeKatex
- Search functionality via @easyops-cn/docusaurus-search-local
- No linting or formatting configuration (uses editor defaults)
