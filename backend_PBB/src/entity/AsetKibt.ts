import { Column, Entity, Index } from "typeorm";

@Index("aset_kibt_pkey", ["kdKibt", "kdPbi", "kdPebin", "kdPpbi", "kdUpb"], {
  unique: true,
})
@Index("kibt_ref_upb_fk", ["kdPbi", "kdPebin", "kdPpbi", "kdUpb"], {})
@Entity("aset_kibt", { schema: "public" })
export class AsetKibt {
  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character", { primary: true, name: "kd_ppbi", length: 2 })
  kdPpbi!: string;

  @Column("character", { primary: true, name: "kd_upb", length: 6 })
  kdUpb!: string;

  @Column("character", { primary: true, name: "kd_kibt", length: 3 })
  kdKibt!: string;

  @Column("character varying", {
    name: "untuk_pemakai",
    nullable: true,
    length: 30,
  })
  untukPemakai!: string | null;

  @Column("character", { name: "tahun", nullable: true, length: 4 })
  tahun!: string | null;

  @Column("character varying", { name: "cara", nullable: true, length: 30 })
  cara!: string | null;

  @Column("bigint", { name: "luas_bumi", nullable: true })
  luasBumi!: string | null;

  @Column("character varying", { name: "dari", nullable: true, length: 30 })
  dari!: string | null;

  @Column("bigint", { name: "harga", nullable: true })
  harga!: string | null;

  @Column("bigint", { name: "nilai_perolehan", nullable: true })
  nilaiPerolehan!: string | null;

  @Column("character varying", { name: "kondisi", nullable: true, length: 30 })
  kondisi!: string | null;

  @Column("character varying", {
    name: "sumber_dana",
    nullable: true,
    length: 30,
  })
  sumberDana!: string | null;

  @Column("character varying", {
    name: "dasar_harga",
    nullable: true,
    length: 30,
  })
  dasarHarga!: string | null;

  @Column("character varying", {
    name: "bukti_hak",
    nullable: true,
    length: 30,
  })
  buktiHak!: string | null;

  @Column("character varying", {
    name: "kronologis_hak",
    nullable: true,
    length: 30,
  })
  kronologisHak!: string | null;

  @Column("character varying", {
    name: "digunakan",
    nullable: true,
    length: 30,
  })
  digunakan!: string | null;
}
