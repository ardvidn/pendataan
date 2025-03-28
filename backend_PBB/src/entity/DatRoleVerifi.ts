import { Column, Entity } from "typeorm";

@Entity("dat_role_verifi", { schema: "public" })
export class DatRoleVerifi {
  @Column("character varying", { name: "role_id", nullable: true, length: 5 })
  roleId!: string | null;

  @Column("character varying", { name: "nm_role", nullable: true, length: 20 })
  nmRole!: string | null;

  @Column("character varying", {
    name: "deskripsi",
    nullable: true,
    length: 100,
  })
  deskripsi!: string | null;
}
