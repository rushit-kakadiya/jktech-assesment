import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { UserEntity } from "../../user/entities/user.entity";

export default class AdminUserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);

    const existingAdminUser = await repository.findOne({
      where: {
        email: "super@admin.com",
      },
    });

    if (!existingAdminUser) {
      await repository.save(
        repository.create({
          email: "super@admin.com",
          roleId: 1,
          firstName: "Admin",
          lastName: "Admin",
          passwordHash:
            "$2a$10$iER0FCL2ZiHaIpnv59XrKu9OksAEu/gCNzq.4YrjPM2V3jPt3d6ue",
        }),
      );
    }
  }
}
