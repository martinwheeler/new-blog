// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { template: { ne: "page" }, draft: { ne: true } }
          }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
