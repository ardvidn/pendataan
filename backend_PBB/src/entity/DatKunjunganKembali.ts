import { Column, Entity, Index } from "typeorm";

@Index("dat_kunjungan_kembali_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Index("d17_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut", "statusKunjunganKembali", "tglKunjunganKembali"], { unique: true })
@Entity("dat_kunjungan_kembali", { schema: "public" })
export class DatKunjunganKembali {
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

  @Column("smallint", { primary: true, name: "no_bng" })
  noBng!: number;

  @Column("timestamp without time zone", { name: "tgl_kunjungan_kembali" })
  tglKunjunganKembali!: Date;

  @Column("smallint", { name: "status_kunjungan_kembali", default: () => "1" })
  statusKunjunganKembali!: number;
}
