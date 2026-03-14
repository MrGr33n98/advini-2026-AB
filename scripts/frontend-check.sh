#!/bin/bash
set -e

echo "🎨 Running Frontend Lint & Typecheck..."
cd frontend
npm run lint
npm run build # Build is also a form of typecheck verification
echo "✅ Frontend Quality Check passed!"
