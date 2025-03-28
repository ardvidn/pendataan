import { Column, Entity, Index } from "typeorm";

@Index("sig_listrik_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noPelanggan", "noUrut"], { unique: true })
@Entity("sig_listrik", { schema: "public" })
export class SigListrik {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character varying", {
    primary: true,
    name: "no_pelanggan",
    length: 30,
  })
  noPelanggan!: string;

  @Column("integer", { name: "daya_listrik", nullable: true })
  dayaListrik!: number | null;

  @Column("character varying", {
    name: "nm_pelanggan",
    nullable: true,
    length: 30,
  })
  nmPelanggan!: string | null;
}
