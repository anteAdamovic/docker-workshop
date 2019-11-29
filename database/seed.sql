DROP TABLE IF EXISTS `todos`;

CREATE TABLE `todos` (
    `id` smallint(6) NOT NULL AUTO_INCREMENT,
    `userId` smallint(6) NOT NULL,
    `title` text NULL DEFAULT '',
    `completed` boolean NULL DEFAULT FALSE,
    PRIMARY KEY (`id`)
);

INSERT INTO `todos` (`id`, `userId`, `title`, `completed`)
VALUES 
    (1, 1, 'Task 1 - DB', FALSE),
    (2, 1, 'Task 2 - DB', FALSE),
    (3, 1, 'Task 3 - DB', FALSE),
    (4, 1, 'Task 4 - DB', FALSE);