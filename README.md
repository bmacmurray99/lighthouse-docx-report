# lighthouse-docx-report
A package to create docx reports based on lighthouse JSON data. Requires an JSON export from either the Lighthouse CLI or DevTools. 
This package currently supports CLI usage only.

To use this package on the command line, use the following syntax: 
```
lighthouse-docx-report --input=<INPUT FILE> --output=<OUTPUT FILE> --template=<TEMPLATE FILE>
```
This package uses [docx-templates](https://github.com/guigrpa/docx-templates) and 
[creating/modifying templates](https://github.com/guigrpa/docx-templates#writing-templates) require using the syntax in the linked documentation. 

