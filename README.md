# Reproduce error

Run these commands:

`$ ./generate.sh`

`$ pnpm build`

Preview the app:

`$ pnpm start`

- Clear the application site data in chrome
- Refresh the page (witness no prefetching)
- Refesh the page again (witness network errors `(failed)net::ERR_INSUFFICIENT_RESOURCES` and console errors)
  - If you don't see network errors, try increasing the number of pages generated in `./generate.sh`
