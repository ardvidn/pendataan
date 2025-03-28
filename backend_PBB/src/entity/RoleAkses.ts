import { Column, Entity, Index } from "typeorm";

@Index("role_akses_pk", ["aksesId", "roleId"], { unique: true })
@Entity("role_akses", { schema: "public" })
export class RoleAkses {
  @Column("character varying", { name: "role_id", length: 5 })
  roleId!: string;

  @Column("character varying", { name: "akses_id", length: 15 })
  aksesId!: string;

  @Column("character", {
    name: "allowed",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  allowed!: string | null;
}
