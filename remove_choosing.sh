#!/bin/bash
# Remove the Why Choosing section from all HTML files

# Remove from index.html (lines 3640-3681)
sed -i '3640,3681d' index.html

# Remove from treks/index.html (lines 3688-3729)  
sed -i '3688,3729d' treks/index.html

# Remove from our-mountaineering-experience/index.html (lines 3688-3729)
sed -i '3688,3729d' our-mountaineering-experience/index.html

echo "✅ Done! Sections removed from all pages"
