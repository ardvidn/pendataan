import { Column, Entity } from "typeorm";

@Entity("dat_subjek_pajak_x", { schema: "public" })
export class DatSubjekPajakX {
  @Column("character", { name: "subjek_pajak_id", length: 30 })
  subjekPajakId!: string;

  @Column("character varying", {
    name: "nm_wp",
    length: 30,
    default: () => "'PEMILIK'",
  })
  nmWp!: string;

  @Column("character varying", { name: "jalan_wp", length: 30 })
  jalanWp!: string;

  @Column("character varying", {
    name: "blok_kav_no_wp",
    nullable: true,
    length: 15,
  })
  blokKavNoWp!: string | null;

  @Column("character", { name: "rw_wp", nullable: true, length: 2 })
  rwWp!: string | null;

  @Column("character", { name: "rt_wp", nullable: true, length: 3 })
  rtWp!: string | null;

  @Column("character varying", {
    name: "kelurahan_wp",
    nullable: true,
    length: 30,
  })
  kelurahanWp!: string | null;

  @Column("character varying", { name: "kota_wp", nullable: true, length: 30 })
  kotaWp!: string | null;

  @Column("character varying", { name: "kd_pos_wp", nullable: true, length: 5 })
  kdPosWp!: string | null;

  @Column("character varying", { name: "telp_wp", nullable: true, length: 30 })
  telpWp!: string | null;

  @Column("character varying", { name: "npwp", nullable: true, length: 50 })
  npwp!: string | null;

  @Column("character", {
    name: "status_pekerjaan_wp",
    length: 1,
    default: () => "'0'",
  })
  statusPekerjaanWp!: string;
}
