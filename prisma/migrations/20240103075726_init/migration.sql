-- AlterTable
ALTER TABLE `comments` MODIFY `userID` INTEGER NULL,
    MODIFY `postID` INTEGER NULL;

-- AlterTable
ALTER TABLE `news_list` MODIFY `catID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `news_list` ADD CONSTRAINT `news_list_catID_fkey` FOREIGN KEY (`catID`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_postID_fkey` FOREIGN KEY (`postID`) REFERENCES `news_list`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
