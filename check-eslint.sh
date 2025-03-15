#!/bin/bash
# Run eslint and output to eslint-report.txt
eslint . -f unix --output-file eslint-report.txt
# If the report file is not empty, exit with an error status
if [ -s eslint-report.txt ]; then
  echo "ESLint errors detected. Please check eslint-report.txt for details."
  exit 1
else
  echo "No ESLint errors found."
fi