import { Image, Badge, Box, Button, Card, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconChevronLeft, IconClock } from '@tabler/icons-react';
import Link from 'next/link';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';
import styles from '../../app/page.module.css';

export default function WorkshopCards() {
    return (
    <Container size="xl" py={{ base: 36, sm: 60, md: 90 }} px={{ base: 12, sm: "md" }} id="workshops-grid">
    <Stack align="center" gap="xs" mb={{ base: 28, sm: 50 }} ta="center">
        <Title order={2} fw={900} size="h1" c="dark.9">
        کارگاه‌های آموزشی
        </Title>
        <Text c="dimmed" size="md" maw={550}>
        بر روی کارگاه مورد نظر کلیک کنید تا سرفصل‌ها و فرم ثبت‌نام را مشاهده کنید.
        </Text>
    </Stack>

    <SimpleGrid id="workshops" className={styles.workshopGrid} cols={{ base: 2, sm: 2, md: 3 }} spacing={{ base: 10, sm: "md", md: "xl" }}>
        {WORKSHOPS.map((workshop) => (
        <Card
            key={workshop.slug}
            data-workshop-card={workshop.slug}
            withBorder
            radius="lg"
            padding={{ base: "xs", sm: "md", md: "lg" }}
            shadow="sm"
            className={styles.workshopCard}
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            }}
        >
            <div>
            <Card.Section pos="relative" className={styles.workshopImageFrame}>
                <Image
                src={workshop.heroImage}
                fit="contain"
                alt={workshop.title}
                className={styles.workshopImage}
                fallbackSrc="https://placehold.co/600x400/e2e8f0/1e293b?text=CubeSat+Subsystem"
                />
                <Badge
                pos="absolute"
                top={12}
                right={12}
                color="dark"
                size="sm"
                radius="sm"
                className={styles.workshopCornerBadge}
                >
                {workshop.id}
                </Badge>
                <Badge
                pos="absolute"
                bottom={12}
                left={12}
                style={{ backgroundColor: workshop.color }}
                size="sm"
                radius="sm"
                className={styles.workshopCategoryBadge}
                >
                {workshop.category}
                </Badge>
            </Card.Section>

            <Stack gap={{ base: 5, sm: "xs" }} mt={{ base: 8, sm: "md" }}>
                <Group justify="space-between" align="center" gap={4} wrap="nowrap">
                <Badge color="gray" variant="light" size="sm" className={styles.workshopMetaBadge}>
                    {workshop.level}
                </Badge>

                <Group gap={4} className={styles.workshopHours}>
                    <IconClock size={14} style={{ color: 'var(--mantine-color-gray-6)' }} />
                    <Text size="xs" c="dimmed" fw={600}>
                    {workshop.hours}
                    </Text>
                </Group>
                </Group>

                <Title order={3} fw={700} c="dark.9" mt={4} className={styles.workshopCardTitle}>
                {workshop.title}
                </Title>
                {/* <Text size="sm" c="gray.6" lh={1.6}>
                {workshop.description}
                </Text> */}
            </Stack>
            </div>

            <Button
            component={Link}
            href={`/workshops/${workshop.slug}`}
            variant="light"
            color="indigo"
            radius="md"
            fullWidth
            mt={{ base: 10, sm: "xl" }}
            size="sm"
            className={styles.workshopCardButton}
            rightSection={<IconChevronLeft size={16} />}
            >
            جزئیات دوره و ثبت‌نام
            </Button>
        </Card>
        ))}
    </SimpleGrid>
    </Container>
    )
}