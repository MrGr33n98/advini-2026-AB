#!/bin/bash
set -e

echo "🛡️  Running Security Scans..."
cd admin_example

echo "-> Brakeman (Static Analysis Security Testing)..."
bundle exec brakeman --quiet

echo "-> Bundler Audit (CVE Check)..."
bundle exec bundle-audit update
bundle exec bundle-audit check

echo "✅ Security Checks passed!"
