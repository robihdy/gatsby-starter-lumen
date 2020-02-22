// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
<<<<<<< HEAD
              contacts {
                facebook
                github
                linkedin
=======
              photo
              contacts {
                facebook
                linkedin
                github
>>>>>>> 459e90851d03195f019b1301e7afc789a8a229c1
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
