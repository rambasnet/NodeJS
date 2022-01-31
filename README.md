# Introduction to JavaScript(JS)/ECMAScript (ES 6) using Jupyter Notebooks

The project repository also includes several demo static webpages and web applications using NodeJS, ExpressJS and MongoDB.

## Who can use these notebooks

### Coding Instructors

We've used these notebooks in Web2 (Web Page Design 2) and Advanced Programming: JavaScript courses at Colorado Mesa University. Instructors can pick and choose chapters and spend adequate time based on students skill level. In Web2 prior programming experience is not a prerequisite, so instructors may spend more time covering various foundational programming concepts (early chapters). In advanced programming courses where students are expected to be familiar with the basic programming concepts in some languages such as (C++, Python or Java), one can swiftly move through the early chapters focussing on syntax and language esoteric of JavaScript and perhaps relating to other languages students are familiar with (such as Python or C++). If the focus of the course is just to teach JavaScript at a beginning programming level, one may skip chapters that may not be typically introduced at that level e.g., Chapter 13 and above.

### Self learners

Depending on their skill and interest level, learners can move as swiftly as appropairate through the chapters. Try solving some exercises towards the end of each chpater before moving on for self assessment of the mastery of the materails.

## How to run these notebooks

### Important

Inorder to learn coding, it's very important to actually type code from scratch and NOT copy paste! You can run provided code to see the output, follow along and learn from it. However, it's very important that you either start a new jupyter notebook or add cells and write your own code from scratch to practice the concepts covered with many similar examples and solve the exercises provided.

### On a local system

To run these notebooks interactvely and save your work locally, you need the following applications:

- NodeJS [https://nodejs.org/en/](https://nodejs.org/en/)
  - server-side JavaScript interpreter

- Jupyter Notebook [http://jupyter.org/](http://jupyter.org/)
  - an interactive web-based editor that allows you to create and share documents that contain live code and data, and

- ijavascript [https://github.com/n-riesco/ijavascript](https://github.com/n-riesco/ijavascript)
  - a kernel for jupyter notebook

We recommend Anaconda or Miniconda package managers to create virtual environment and install nodejs and other packages on all modern platforms.

### JavaScript Development Environment Setup

- if you're using Linux or Mac follow the corresponding instructions at [https://github.com/rambasnet/DevEnvSetup](https://github.com/rambasnet/DevEnvSetup)
- if you're using Windows, install the same tools by Googling the instructions for Windows

### Install Jupyter Notebook and Ijavascript kernel
- follow the instruction provided here based on your Operating system: [https://www.npmjs.com/package/ijavascript](https://www.npmjs.com/package/ijavascript)


#### Running the notebooks in VS Code

- Python notebooks can be run farily straightforward in VS Code but haven't yet figured it out how to run NodeJS notebooks in VS Code.

#### Running the notebooks via jupyternotebook server

Once the above tools are installed, open a terminal activate nodejs or virtual env; change working directory using cd command to go into the folder where this repo is cloned and run the notebook from there:

```bash
    conda activate nodejs # if a virtural environment is created using nodejs
    cd <directory where this repo is cloned>
    jupyter notebook # classical notebook OR use retro
    jupyter retro # Jupyter notebook with retro look and feel
```

This will start a Jupyter session in your browser. Open a chapter, and start coding...

## Contributing

Contributions are accepted via pull requests. You can also open issues on bugs, typos or any corrections and suggest improvements on the notebooks.

## Copyright and License

&copy; Ram B. Basnet. Permission is granted to copy, distribute and/or modify this document
under the terms of the MIT License. See LICENSE file for details.

Please feel free to use the notebooks anyway you find it useful.
