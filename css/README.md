# CSS Architecture Documentation

## Overview

The Adam Solutions website CSS has been completely reorganized following modern best practices for maintainability, scalability, and performance. The architecture follows the **ITCSS (Inverted Triangle CSS)** methodology with a modular approach.

## File Structure

```
css/
├── styles.css              # Main entry point (imports all modules)
├── base/                   # Foundation styles
│   ├── variables.css       # CSS custom properties & design tokens
│   ├── reset.css          # Modern CSS reset & normalize
│   └── typography.css     # Typography system & text utilities
├── layout/                 # Layout & structure
│   ├── grid.css           # Grid system & flexbox utilities
│   └── sections.css       # Sections, containers & layout components
├── components/             # Reusable UI components
│   ├── navigation.css     # Navbar, nav links & breadcrumbs
│   ├── buttons.css        # Button variants & states
│   ├── cards.css          # Card components & layouts
│   └── forms.css          # Form controls & validation
├── utilities/              # Helper classes
│   ├── spacing.css        # Margin & padding utilities
│   └── animations.css     # Animations, transitions & transforms
├── pages/                  # Page-specific styles
│   └── notifications.css  # Notifications, alerts & loading states
└── README.md              # This documentation
```

## Architecture Principles

### 1. **Separation of Concerns**

- **Base**: Foundation styles that affect the entire site
- **Layout**: Structural components and grid systems
- **Components**: Reusable UI elements
- **Utilities**: Single-purpose helper classes
- **Pages**: Page-specific overrides and unique styles

### 2. **CSS Custom Properties (Variables)**

All design tokens are centralized in `base/variables.css`:

- Colors (primary, secondary, status colors, grays)
- Typography (fonts, sizes, weights, line-heights)
- Spacing (consistent spacing scale)
- Borders & shadows
- Transitions & animations
- Breakpoints & z-index scale

### 3. **Modern CSS Reset**

- Box-sizing reset
- Sensible defaults
- Accessibility considerations
- Performance optimizations

### 4. **Responsive Design**

- Mobile-first approach
- Flexible grid system
- Responsive typography
- Breakpoint-specific utilities

### 5. **Component-Based Architecture**

Each component is self-contained with:

- Base styles
- Variants and modifiers
- States (hover, focus, active, disabled)
- Responsive behavior

## Usage Guidelines

### Importing Styles

The main `styles.css` file imports all modules in the correct order:

```css
/* Base styles first */
@import url("base/variables.css");
@import url("base/reset.css");
@import url("base/typography.css");

/* Then layout */
@import url("layout/grid.css");
@import url("layout/sections.css");

/* Components */
@import url("components/navigation.css");
/* ... */

/* Utilities last */
@import url("utilities/spacing.css");
@import url("utilities/animations.css");
```

### Using CSS Variables

Access design tokens throughout your CSS:

```css
.my-component {
  color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius);
  transition: var(--transition-all);
}
```

### Component Classes

Use BEM-inspired naming for components:

```css
/* Component */
.card {
}

/* Component modifiers */
.card-primary {
}
.card-large {
}

/* Component states */
.card:hover {
}
.card.is-active {
}
```

### Utility Classes

Use utilities for spacing, typography, and layout:

```html
<div class="mb-4 text-center">
  <h2 class="text-primary font-bold">Title</h2>
  <p class="text-muted">Description</p>
</div>
```

## Key Features

### 1. **Design System Integration**

- Consistent spacing scale (4px base unit)
- Systematic color palette
- Typography hierarchy
- Component variants

### 2. **Performance Optimizations**

- Efficient CSS organization
- Minimal redundancy
- Optimized selectors
- Reduced specificity conflicts

### 3. **Accessibility**

- Focus management
- Color contrast considerations
- Reduced motion preferences
- Semantic HTML support

### 4. **Developer Experience**

- Clear naming conventions
- Comprehensive documentation
- Logical file organization
- Easy maintenance and updates

## Customization

### Adding New Components

1. Create a new file in `components/`
2. Follow the established naming conventions
3. Include variants, states, and responsive behavior
4. Add the import to `styles.css`

### Modifying Design Tokens

Update variables in `base/variables.css`:

- Colors: Update color palette
- Spacing: Modify spacing scale
- Typography: Adjust font settings
- Breakpoints: Change responsive breakpoints

### Adding Utilities

1. Create utilities in appropriate utility files
2. Follow consistent naming patterns
3. Include responsive variants when needed
4. Document usage examples

## Browser Support

The CSS architecture supports:

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties
- Modern CSS features with fallbacks

## Migration Notes

### From Previous Architecture

- All styles have been reorganized into logical modules
- CSS custom properties replace SASS variables
- Utility-first approach for spacing and layout
- Component-based organization

### Benefits of New Architecture

- ✅ Better maintainability
- ✅ Improved performance
- ✅ Easier debugging
- ✅ Scalable structure
- ✅ Consistent design system
- ✅ Better developer experience

## Contributing

When adding new styles:

1. Choose the appropriate module/file
2. Follow existing naming conventions
3. Use CSS custom properties for values
4. Include responsive behavior
5. Add documentation for complex components
6. Test across different screen sizes

## Resources

- [ITCSS Methodology](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)
- [BEM Methodology](http://getbem.com/)
