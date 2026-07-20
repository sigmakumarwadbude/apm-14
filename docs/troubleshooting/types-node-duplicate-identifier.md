# Troubleshooting: TS2300 Duplicate Identifier 'ReturnType'

## Problem

While setting up the Angular 14 project, the application failed to compile with the following error:

```text
Error: node_modules/typescript/lib/lib.es5.d.ts:1602:6 - error TS2300:
Duplicate identifier 'ReturnType'.

node_modules/@types/node/ffi.d.ts:418:10
'ReturnType' was also declared here.
```

## Environment

| Package | Version |
|---------|---------|
| Angular | 14.2.x |
| Node.js | 16.15.1 |
| npm | 8.11.0 |
| TypeScript | 4.7.2 |

## Root Cause

The issue was **not** caused by the Node.js runtime version.

Instead, an incompatible version of **@types/node** was installed.

Angular 14 uses **TypeScript 4.7**, while newer versions of `@types/node` contain type definitions that are incompatible with TypeScript 4.7, resulting in duplicate identifier errors such as:

- `ReturnType`
- `TextEncoder`
- `TextDecoder`

## Resolution

Install a compatible version of `@types/node`.

```bash
npm install --save-dev @types/node@16
```

Then perform a clean installation.

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Windows PowerShell

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## Verification

Verify the installed version:

```bash
npm ls @types/node
```

Expected output:

```text
@types/node@16.x.x
```

After installing `@types/node@16`, the project compiled successfully.

## Lessons Learned

- Node.js runtime compatibility does **not** guarantee TypeScript type compatibility.
- Always align `@types/node` with the Angular and TypeScript versions.
- For Angular 14, `@types/node@16` is a safe and compatible choice.