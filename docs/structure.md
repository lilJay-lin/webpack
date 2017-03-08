# 项目结构

     |---  build/                      # webpack config files
     |---  src/
            |--- pages                 # app entry files
            |--- public                 # public resources
                |---  common
                |---  less
     |---  static/                     # pure static assets (directly copied)
     |---  test/
            |--- unit/                   # unit tests
                  |---specs/              # test spec files
                  |---index.js            # test build entry file
                  |---karma.conf.js       # test runner config file
     |---  .babelrc                    # babel config
     |---  .postcss.config.js               # postcss config
     |---  .eslintrc.js                # eslint config
     |---  index.html                  # index.html template
     |---  package.json                # build scripts and dependencies