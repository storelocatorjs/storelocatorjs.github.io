install:
	pip3 install mkdocs
	pip3 install mkdocs-material

start:
	python3 -m mkdocs serve

build:
	rm -rf ./site
	python3 -m mkdocs build
