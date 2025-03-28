import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Ketbatal } from "./Ketbatal";

@Index("pembatalan_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembatalanSpptKe", "thnPajakSppt"], { unique: true })
@Entity("pembatalan_sppt", { schema: "public" })
export class PembatalanSppt {
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

  @Column("smallint", { primary: true, name: "pembatalan_sppt_ke" })
  pembatalanSpptKe!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("bigint", { name: "denda_sppt", nullable: true })
  dendaSppt!: string | null;

  @Column("bigint", { name: "jml_sppt_yg_dibatalkan" })
  jmlSpptYgDibatalkan!: string;

  @Column("timestamp without time zone", { name: "tgl_pembatalan_sppt" })
  tglPembatalanSppt!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_btl_sppt",
    default: () => "statement_timestamp()",
  })
  tglRekamBtlSppt!: Date;

  @Column("character", { name: "nip_rekam_btl_sppt", length: 18 })
  nipRekamBtlSppt!: string;

  @ManyToOne(() => Ketbatal, (ketbatal) => ketbatal.pembatalanSppts)
  @JoinColumn([{ name: "kd_batal", referencedColumnName: "kdBatal" }])
  kdBatal!: Ketbatal;
}
