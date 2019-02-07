mkdir build/js
for file in js/*
do 
    uglifyjs "$file" -o build/"$file"
done
