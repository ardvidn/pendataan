import { Column, Entity, Index } from "typeorm";

@Index("pengembalian_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("pengembalian_sppt", { schema: "public" })
export class PengembalianSppt {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("character varying", {
    name: "alasan_sppt_kembali",
    nullable: true,
    length: 50,
  })
  alasanSpptKembali!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_kembali_sppt",
    default: () => "statement_timestamp()",
  })
  tglKembaliSppt!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_kembali_sppt",
    default: () => "statement_timestamp()",
  })
  tglRekamKembaliSppt!: Date;

  @Column("character", { name: "nip_perekam_kembali_sppt", length: 18 })
  nipPerekamKembaliSppt!: string;
}
