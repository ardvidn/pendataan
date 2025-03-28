import { Column, Entity } from "typeorm";

@Entity("setting_apps", { schema: "public" })
export class SettingApps {
  @Column("numeric", { name: "id", nullable: true, precision: 38, scale: 0 })
  id!: string | null;

  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character varying", {
    name: "nama_propinsi",
    nullable: true,
    length: 30,
  })
  namaPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character varying", {
    name: "nama_dati2",
    nullable: true,
    length: 30,
  })
  namaDati2!: string | null;

  @Column("character varying", { name: "logo", nullable: true, length: 30 })
  logo!: string | null;

  @Column("numeric", {
    name: "change_password",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  changePassword!: string | null;

  @Column("character varying", {
    name: "nama_aplikasi",
    nullable: true,
    length: 200,
  })
  namaAplikasi!: string | null;
}
