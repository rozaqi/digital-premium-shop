Clickable category tile for the product-category grid (2-col mobile, 3–6 col desktop).

```jsx
<CategoryCard label="Streaming" icon="play" count={12} tint="#5046E5" href="#streaming" />
<CategoryCard label="AI Tools" icon="sparkles" tint="#10B981" />
```

`icon` is a Lucide name (`play`, `sparkles`, `briefcase`, `cloud`, `graduation-cap`, `palette`). Requires `lucide.createIcons()` after render. `tint` colors the chip.
