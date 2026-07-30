#!/usr/bin/env bash
# Package the Celsius website project into a tar.gz with a top-level folder,
# so when the user extracts it they get a clean `celsius-website/` directory
# instead of all files dumped into their current directory.
#
# Usage:  bash scripts/package_project.sh
# Output: download/celsius-website.tar.gz

set -euo pipefail

PROJECT_ROOT="/home/z/my-project"
OUTPUT_DIR="${PROJECT_ROOT}/download"
TMP_STAGE="${PROJECT_ROOT}/.stage-celsius-website"
PKG_NAME="celsius-website"
TARBALL="${OUTPUT_DIR}/${PKG_NAME}.tar.gz"

mkdir -p "${OUTPUT_DIR}"
rm -rf "${TMP_STAGE}"
mkdir -p "${TMP_STAGE}/${PKG_NAME}"

# Copy each item individually (skip silently if missing)
copy_if_exists() {
  local src="${PROJECT_ROOT}/$1"
  if [[ -e "${src}" ]]; then
    cp -r "${src}" "${TMP_STAGE}/${PKG_NAME}/"
  fi
}

echo "Staging files into ${TMP_STAGE}/${PKG_NAME} ..."
for item in src public scripts .claude package.json package-lock.json \
            next.config.ts tsconfig.json postcss.config.mjs \
            tailwind.config.ts components.json PRODUCT.md \
            README.md .gitignore .eslintrc.json eslint.config.mjs; do
  copy_if_exists "${item}"
done

# Exclude heavy / generated dirs from the staged copy
rm -rf "${TMP_STAGE}/${PKG_NAME}/scripts/pdf_out"
rm -rf "${TMP_STAGE}/${PKG_NAME}/scripts/__pycache__"
find "${TMP_STAGE}/${PKG_NAME}" -name "node_modules" -type d -prune -exec rm -rf {} + 2>/dev/null || true
find "${TMP_STAGE}/${PKG_NAME}" -name ".next" -type d -prune -exec rm -rf {} + 2>/dev/null || true

echo "Creating ${TARBALL} ..."
tar -czf "${TARBALL}" -C "${TMP_STAGE}" "${PKG_NAME}"

# Cleanup stage
rm -rf "${TMP_STAGE}"

SIZE=$(du -h "${TARBALL}" | cut -f1)
echo "Done."
echo "  Output: ${TARBALL}"
echo "  Size:   ${SIZE}"
echo "  Top-level folder inside tar: ${PKG_NAME}/"
echo ""
echo "To verify: tar -tzf ${TARBALL} | head -5"
