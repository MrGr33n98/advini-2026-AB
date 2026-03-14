#!/bin/bash
set -e

echo "💎 Running Backend Lint (RuboCop)..."
cd admin_example
bundle exec rubocop --parallel
echo "✅ Backend Lint passed!"
