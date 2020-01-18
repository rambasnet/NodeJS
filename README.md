# NodeJS Notebooks

# Introduction to JavaScript(JS)/ECMAScript (ES 6) and NodeJS using Jupyter Notebooks

## Who can use these notebooks

### Coding Instructors

We've used these notebooks in Web2 (Web Page Design 2) and Advanced Programming: Python courses at Colorado Mesa University. Instructors can pick and choose chapters and spend adequte time based on students skill level. In Web2 prior programming experiece is not a prerequisite, though it always helps to quickly cover the concepts and focus on syntax and language esoteric of JavaScript. If the focus of the course is just to teach JavaScript at a beginnging programming level, one may skip chapters that may not be typically introduced at that level such as Chapter 13 and above.

### Self learners

Depending on their skill and interest level, learners can move as swiftly as appropairate through the chapters. Try solving some exercises towards the end of each chpater before moving on for self assessment of the mastery of the materails.

## How to use these notebooks

### Important

Inorder to learn coding, it's very important to actually type code on your own from scratch and NOT copy paste! You can run provided cells to see the output, follow along and learn from it but it's important that you either start a new jupyter notebook or add cells and write your own code from scratch to practice the concepts covered with many similar examples and solve the exercises provided.


### On a local system

To run these notebooks interactvely and save your work locally, you need NodeJS https://nodejs.org/en/, Jupyter Notebook http://jupyter.org/ -- an interactive web-based editor that allows you to create and share documents that contain live code and data, and ijavascript https://github.com/n-riesco/ijavascript kernel for jupyter notebook. We recommend Anaconda or Miniconda package managers to install Python and other packages on all modern platforms. The project also includes several demo sites using NodeJS, ExpressJS and MongoDB.

#### Installing via Anaconda or Miniconda

Anaconda or Miniconda has Python 3 and many other packages that you can easily install on any platform (Windows, Linux, and Mac). First, install Anaconda http://docs.continuum.io/anaconda/install/ or Miniconda https://conda.io/docs/user-guide/install/index.html

After installing anaconda or miniconda, open a terminal and run the following commands:
```
    - update conda
    $ conda update conda
    - create an virtual environment called nodejs with python 3.8 version
    $ conda create -n nodejs python=3.7
    - see all your conda environments
    $ conda env list
    - activate the nodejs environment; Note, you must do it everytime you want to run nodejs
    $ conda install -c conda-forge nodejs
    $ conda install jupyter
    $ npm install -g ijavascript
    $ sudo ijsinstall --install=global
```
#### Running the notebooks in VS Code
- Python notebooks can be run farily straightforward in VS Code but haven't yet figured it out how to run NodeJS notebooks in VS Code.

#### Running the notebooks via jupyternotebook server

Once the above tools are installed, open a terminal change working directory using cd command to go into the folder where this repo is cloned and run the notebook from there:

    cd <directory where this repo is cloned>
    jupyter notebook

This will start a Jupyter session in your browser. Open a chapter, and start coding...

## Contributing

Contributions are accepted via pull requests. You can also open issues on bugs, typos or any corrections and suggest improvements on the notebooks.

## Copyright and License

&copy; Ram B. Basnet. Permission is granted to copy, distribute and/or modify this document
under the terms of the MIT License. See LICENSE file for details.

Please feel free to use the notebooks anyway you find it useful.
