import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import styles from "./about.module.scss";

type SelectedProjectsProps = {
  limit: number;
};

export default function SelectedProjects({ limit }: SelectedProjectsProps) {
  const projects = getPosts(["src", "app", "work", "projects"])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit);

  return (
    <Column fillWidth className={styles.projectList}>
      {projects.map((project) => (
        <Column
          as="article"
          key={project.slug}
          className={styles.projectCard}
          fillWidth
          gap="8"
          paddingY="16"
        >
          <Heading as="h3" variant="heading-strong-s">
            {project.metadata.projectName || project.metadata.title}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {project.metadata.summary}
          </Text>
          <Row wrap gap="20">
            <SmartLink suffixIcon="arrowRight" href={`/work/${project.slug}`}>
              <Text variant="body-default-s">Read case study</Text>
            </SmartLink>
            {project.metadata.link && (
              <SmartLink suffixIcon="arrowUpRightFromSquare" href={project.metadata.link}>
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            )}
          </Row>
        </Column>
      ))}
    </Column>
  );
}
