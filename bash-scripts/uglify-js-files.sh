mkdir docs/js
for file in js/*
do 
    uglifyjs "$file" -o docs/"$file"
done
