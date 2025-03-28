import { Column, Entity } from "typeorm";

@Entity("dat_login_verifi", { schema: "public" })
export class DatLoginVerifi {
  @Column("character varying", { name: "nm_login", nullable: true, length: 18 })
  nmLogin!: string | null;

  @Column("character", { name: "nip", nullable: true, length: 18 })
  nip!: string | null;

  @Column("character varying", { name: "password", nullable: true, length: 50 })
  password!: string | null;

  @Column("character varying", { name: "role_id", nullable: true, length: 5 })
  roleId!: string | null;

  @Column("character varying", { name: "kd_lp", nullable: true, length: 10 })
  kdLp!: string | null;

  @Column("character", { name: "ttd", nullable: true, length: 1 })
  ttd!: string | null;

  @Column("character", { name: "admin", nullable: true, length: 1 })
  admin!: string | null;
}
