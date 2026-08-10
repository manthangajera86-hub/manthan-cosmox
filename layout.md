# Website Layout Specification

This document describes the structural layout and styling directives for the website header and hero section. 

## Global Design Context
- **Background Layer**: A large, full-width background image sits completely behind the entire header and navigation section (the components below float over this image).

## Structural Hierarchy (Top to Bottom)

### 1. Top Bar (Row 1)
- **Layout Model**: Flexbox row, set to space-between (left and right alignment).
- **Left Side**: 
  - **Logo**: The main site logo element.
- **Right Side (Utility Container)**: 
  - **Elements**: "Contact", "Search", and "Country Selection".
  - **Styling Directive**: These elements are **not** connected into a single solid bar. They are implemented as independent, small **capsule-shaped** buttons (pill shapes, e.g., using `border-radius: 9999px` or `rounded-full`).

### 2. Upper Horizontal Divider
- A full-width horizontal line (`<hr>` or a bottom/top border) spanning across the screen, sitting exactly below the Top Bar.

### 3. Main Navigation Bar (Row 2)
- **Layout Model**: Flexbox row (centered or evenly spaced), positioned right below the upper horizontal line.
- **Navigation Links**: A collection of up to 10 links.
  - Home
  - About
  - Our Story
  - Capability
  - *[Link 5]*
  - *[Link 6]*
  - *[Link 7]*
  - *[Link 8]*
  - *[Link 9]*
  - *[Link 10]*
- **Styling Directive**: Like the utility links above, these main navigation links should also be styled as **capsules** (pill-shaped elements) floating above the bottom line.

### 4. Lower Horizontal Divider
- A second full-width horizontal line placed immediately below the Main Navigation capsules, closing off the header section visually.

## CSS / DOM Tree Hints for Code Generation
- **Wrapper**: Wrap the header in a `<header>` tag with `position: absolute` or `position: relative` overlapping the hero image.
- **Capsules**: Apply heavy border-radius (e.g., `border-radius: 50px`), padding (e.g., `padding: 8px 16px`), and a background color (possibly semi-transparent like `rgba(255, 255, 255, 0.2)` with backdrop blur) so the big background image is still visible through or around them.
- **Separators**: The horizontal lines could be implemented via `<hr>` tags with low opacity, or as `border-bottom` on wrapper `<div>` elements.
