import { Column, Entity, Index, OneToMany } from "typeorm";
import { DatObjekPajak } from "./DatObjekPajak";

@Index("d11_2_ak", ["blokKavNoWp", "jalanWp", "rtWp", "rwWp", "subjekPajakId"], { unique: true })
@Index("d11_1_ak", ["nmWp", "subjekPajakId"], { unique: true })
@Index("d11_4_ak", ["npwp", "subjekPajakId"], { unique: true })
@Index("d11_3_ak", ["statusPekerjaanWp", "subjekPajakId"], { unique: true })
@Index("dat_subjek_pajak_pkey", ["subjekPajakId"], { unique: true })
@Entity("dat_subjek_pajak", { schema: "public" })
export class DatSubjekPajak {
  @Column("character varying", {
    name: "blok_kav_no_wp",
    nullable: true,
    length: 15,
  })
  blokKavNoWp!: string | null;

  @Column("character varying", { name: "jalan_wp", length: 30 })
  jalanWp!: string;

  @Column("character varying", { name: "kd_pos_wp", nullable: true, length: 5 })
  kdPosWp!: string | null;

  @Column("character varying", {
    name: "kelurahan_wp",
    nullable: true,
    length: 30,
  })
  kelurahanWp!: string | null;

  @Column("character varying", { name: "kota_wp", nullable: true, length: 30 })
  kotaWp!: string | null;

  @Column("character varying", {
    name: "nm_wp",
    length: 30,
    default: () => "'PEMILIK'",
  })
  nmWp!: string;

  @Column("character varying", { name: "npwp", nullable: true, length: 50 })
  npwp!: string | null;

  @Column("character", { name: "rt_wp", nullable: true, length: 3 })
  rtWp!: string | null;

  @Column("character", { name: "rw_wp", nullable: true, length: 2 })
  rwWp!: string | null;

  @Column("character", {
    name: "status_pekerjaan_wp",
    length: 1,
    default: () => "'0'",
  })
  statusPekerjaanWp!: string;

  @Column("character", { primary: true, name: "subjek_pajak_id", length: 30 })
  subjekPajakId!: string;

  @Column("character varying", { name: "telp_wp", nullable: true, length: 30 })
  telpWp!: string | null;

  @OneToMany(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.subjekPajak)
  datObjekPajaks!: DatObjekPajak[];
}
