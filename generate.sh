mkdir src/routes/pages

i=0
while (( i++ < 750 )); do
  mkdir src/routes/pages/page$i
  cp src/routes/page/index.tsx "src/routes/pages/page$i/index.tsx"
done
